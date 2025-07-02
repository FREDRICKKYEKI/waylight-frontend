import React from "react";
import { useReadingTime } from "react-hook-reading-time";

export const RenderReadingTime = (props: {
    type: string;
    content: any[];
}) => {
    const { type, content } = props;

    const filteredBlock = content
        .filter((x) => x._type === "block")
        .map((children) => children.children.map((texts: any) => texts.text));

    const readingTime = useReadingTime(filteredBlock.join(" "));

    return (<>
        <span>{readingTime.text}</span>
    </>
    );
};

export default RenderReadingTime