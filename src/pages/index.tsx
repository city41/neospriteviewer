import React, { useState } from "react";
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
import { CData, SData } from "../interfaces";

// @ts-ignore: the typing for setConfig doesn't have this prop but it does work
setConfig({ pureSFC: true });

import "./global.css";
import styles from "./index.module.css";

function formatWithCommas(n: number): string {
    if ("toLocaleString" in new Number(n)) {
        return n.toLocaleString();
    } else {
        // if the browser doesn't support it, just fall back to no commas, no big deal
        return n.toString();
    }
}

function getTileIndices(data: CData | SData | null): { tileIndices: number[] | null; numTiles: number; totalTiles: number } {
    if (!data) {
        return { tileIndices: null, numTiles: 0, totalTiles: 0 };
    }

    let totalTiles: number | null = null;

    if (data.fileType === "C") {
        // one tile is 128 bytes, half of the tile is in C1,
        // so total tiles is length divided by (128 / 2)
        totalTiles = data.c1Data.length / 64;
    } else {
        // fix rom tiles are 32 bytes each
        totalTiles = data.sData.length / 32;
    }

    const numTiles = Math.min(totalTiles, 1024);
    const tileIndices = new Array(numTiles).fill(1, 0, numTiles).map((_, i) => i + 0);

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

const titleImageUrl = "https://city41.github.io/neospriteviewer/fool.png";

export default () => {
    const [romData, setData] = useState<CData | SData | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [modalIndex, setModalIndex] = useState<number>(-1);

    const { tileIndices, numTiles, totalTiles } = getTileIndices(romData);

    const Tile: React.ComponentType<any> = romData && romData.fileType === "C" ? CTile : STile;
    const tileClasses = classnames(styles.tile, {
        [styles.cTile]: romData && romData.fileType === "C",
        [styles.sTile]: romData && romData.fileType === "S"
    });

    return (
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
                                content: "https://city41.github.io/neospriteviewer"
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
                                onLoad={newCData => {
                                    setLoaded(false);
                                    setData(newCData);
                                }}
                                data={data}
                                statusMessage={
                                    numTiles < totalTiles
                                        ? `there are ${formatWithCommas(
                                              totalTiles
                                          )} tiles in total, but only showing first ${formatWithCommas(numTiles)}`
                                        : null
                                }
                            />
                        </Header>

                        <div className={styles.tilesContainer}>
                            {!tileIndices && <NullState />}
                            {(tileIndices || []).map((t, i, a) => {
                                const tileContainerClasses = classnames(styles.tileContainer, {
                                    [styles.tileSelected]: i === modalIndex
                                });

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
    );
};
