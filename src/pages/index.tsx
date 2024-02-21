import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { setConfig } from "react-hot-loader";
import { Header } from "../components/header";
import { CTile } from "../components/cTile";
import { STile } from "../components/sTile";
import { DetailedTile } from "../components/detailedTile";
import { DataLoader } from "../components/dataLoader";
import { NullState } from "../components/nullState";
import { Paginator } from "../components/paginator";
import { CData, FIXData, SData, SPRData } from "../interfaces";

// @ts-ignore: the typing for setConfig doesn't have this prop but it does work
setConfig({ pureSFC: true });

import "./global.css";
import styles from "./index.module.css";

function getTileIndices(
    data: CData | SData | SPRData | FIXData | null,
    currentPage: number,
    pageSize: number
): { tileIndices: number[] | null; numTiles: number; totalTiles: number } {
    if (!data) {
        return { tileIndices: null, numTiles: 0, totalTiles: 0 };
    }

    let totalTiles: number | null = null;

    if (data.fileType === "C") {
        // one tile is 128 bytes, half of the tile is in C1,
        // so total tiles is length divided by (128 / 2)
        totalTiles = data.c1Data.length / 64;
    } else if (data.fileType === "S") {
        // fix rom tiles are 32 bytes each
        totalTiles = data.sData.length / 32;
    } else if (data.fileType === "SPR") {
        totalTiles = data.sprData.length / 128;
    } else {
        totalTiles = data.fixData.length / 32;
    }

    const numTiles = Math.min(pageSize, totalTiles, totalTiles - currentPage * pageSize);
    const tileIndices = new Array(numTiles).fill(1, 0, numTiles).map((_, i) => i + currentPage * pageSize);

    return { tileIndices, numTiles, totalTiles };
}

const query = graphql`
    query MetaDataQuery {
        site {
            siteMetadata {
                title
                keywords
                description
                twitterHandle
            }
        }
    }
`;

const mainUrl = "https://neospriteviewer.mattgreer.dev";
const titleImageUrl = mainUrl + "/fool.png";

const REDIRECT_SCRIPT =
    process.env.NODE_ENV === "production"
        ? `if (!window.location.hostname.toLowerCase().includes("mattgreer.dev")) {
	window.location.replace("${mainUrl}");
}`
        : "";

function isCData(romData: CData | SData | SPRData | FIXData): romData is CData {
    return romData.fileType === "C";
}

function isSData(romData: CData | SData | SPRData | FIXData): romData is SData {
    return romData.fileType === "S";
}

function isSPRData(romData: CData | SData | SPRData | FIXData): romData is SPRData {
    return romData.fileType === "SPR";
}

function isBlankTile(romData: CData | SData | SPRData | FIXData, i: number): boolean {
    if (isCData(romData)) {
        const tileDataOdd = romData.c1Data.slice(i * 64, (i + 1) * 64);
        const tileDataEven = romData.c2Data.slice(i * 64, (i + 1) * 64);

        return tileDataOdd.every(b => b === 0) && tileDataEven.every(b => b === 0);
    } else if (isSData(romData)) {
        const tileData = romData.sData.slice(i * 32, (i + 1) * 32);

        return tileData.every(b => b === 0);
    } else if (isSPRData(romData)) {
        const tileData = romData.sprData.slice(i * 128, (i + 1) * 128);

        return tileData.every(b => b === 0);
    } else {
        const tileData = romData.fixData.slice(i * 32, (i + 1) * 32);

        return tileData.every(b => b === 0);
    }
}

const fileTypeToCmp: Record<"C" | "S" | "SPR" | "FIX", React.ComponentType<any>> = {
    C: CTile,
    S: STile,
    SPR: CTile,
    FIX: STile
};

export default () => {
    const [romData, setData] = useState<CData | SData | SPRData | FIXData | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [modalIndex, setModalIndex] = useState<number>(-1);
    const [currentPage, setCurrentPage] = useState(0);
    const [skipBlankTiles, setSkipBlankTiles] = useState(false);

    const pageSize = 1024;

    const { tileIndices, numTiles, totalTiles } = getTileIndices(romData, currentPage, pageSize);

    const Tile: React.ComponentType<any> | null = romData && fileTypeToCmp[romData.fileType];
    const tileClasses = classnames(styles.tile, {
        [styles.cTile]: romData && romData.fileType === "C",
        [styles.sprTile]: romData && romData.fileType === "SPR",
        [styles.sTile]: romData && romData.fileType === "S",
        [styles.fixTile]: romData && romData.fileType === "FIX"
    });

    return (
        <>
            <script lang="javascript" dangerouslySetInnerHTML={{ __html: REDIRECT_SCRIPT }} />
            <StaticQuery
                query={query}
                render={data => (
                    <>
                        <Helmet
                            title={data.site.siteMetadata.title}
                            meta={[
                                {
                                    name: "description",
                                    content: data.site.siteMetadata.title
                                },
                                {
                                    name: "keywords",
                                    content: data.site.siteMetadata.keywords
                                },
                                {
                                    name: "twitter:card",
                                    content: "summary"
                                },
                                {
                                    name: "twitter:site",
                                    content: data.site.siteMetadata.twitterHandle
                                },
                                {
                                    name: "twitter:title",
                                    content: data.site.siteMetadata.title
                                },
                                {
                                    name: "twitter:description",
                                    content: data.site.siteMetadata.description
                                },
                                {
                                    name: "twitter:image",
                                    content: titleImageUrl
                                },
                                {
                                    name: "og:title",
                                    content: data.site.siteMetadata.title
                                },
                                {
                                    name: "og:type",
                                    content: "website"
                                },
                                {
                                    name: "og:url",
                                    content: mainUrl
                                },
                                {
                                    name: "og:description",
                                    content: data.site.siteMetadata.description
                                },
                                {
                                    name: "og:image",
                                    content: titleImageUrl
                                },
                                {
                                    name: "og:title",
                                    content: data.site.siteMetadata.title
                                }
                            ]}
                        >
                            <html lang="en" />
                        </Helmet>
                        <div className={styles.root}>
                            <Header className={styles.header} loading={!!tileIndices && !loaded}>
                                <DataLoader
                                    className={styles.dataLoader}
                                    onLoad={newCData => {
                                        setLoaded(false);
                                        setData(newCData);
                                        setCurrentPage(0);
                                    }}
                                    data={data}
                                />
                                {numTiles < totalTiles ? (
                                    <Paginator
                                        className={styles.paginator}
                                        currentPage={currentPage}
                                        totalTiles={totalTiles}
                                        pageSize={pageSize}
                                        onFirstClick={() => {
                                            setCurrentPage(0);
                                        }}
                                        onPrevClick={() => {
                                            setCurrentPage(p => p - 1);
                                        }}
                                        onNextClick={() => {
                                            setCurrentPage(p => p + 1);
                                        }}
                                    />
                                ) : null}
                                <div className={styles.skipBlankTiles}>
                                    <input
                                        type="checkbox"
                                        checked={skipBlankTiles}
                                        onChange={() => {
                                            setSkipBlankTiles(sbt => !sbt);
                                        }}
                                    />
                                    <div>skip blank tiles</div>
                                </div>
                            </Header>

                            <div className={styles.tilesContainer}>
                                {!tileIndices && <NullState />}
                                {(tileIndices || []).map((t, i, a) => {
                                    const tileContainerClasses = classnames(styles.tileContainer, {
                                        [styles.tileSelected]: i === modalIndex
                                    });

                                    if (Tile === null || (skipBlankTiles && romData && isBlankTile(romData, t))) {
                                        return null;
                                    }

                                    return (
                                        <div className={tileContainerClasses} onClick={() => setModalIndex(t)}>
                                            <Tile
                                                key={(romData?.filename ?? "X") + "-" + t}
                                                className={tileClasses}
                                                data={romData}
                                                index={t}
                                                onLoad={i === a.length - 1 ? () => setLoaded(true) : undefined}
                                            />
                                            <div className={styles.tileIndex}>{t}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            {modalIndex > -1 && (
                                <DetailedTile
                                    onPrev={() => setModalIndex(Math.max(0, modalIndex - 1))}
                                    onNext={() => setModalIndex(Math.min(numTiles - 1, modalIndex + 1))}
                                    onClose={() => setModalIndex(-1)}
                                    className={styles.detailedTile}
                                    data={romData}
                                    index={modalIndex}
                                />
                            )}
                            <div className={styles.fool} />
                        </div>
                    </>
                )}
            />
        </>
    );
};
