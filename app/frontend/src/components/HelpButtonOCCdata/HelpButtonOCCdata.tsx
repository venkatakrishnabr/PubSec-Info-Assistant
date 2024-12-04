// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { useState } from "react";
import { Text } from "@fluentui/react";
import { ClipboardTaskListLtr24Regular } from "@fluentui/react-icons";
import styles from "./HelpButtonOCCdata.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const HelpButtonOCCdata = ({ className, onClick }: Props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div
            className={`${styles.container} ${className ?? ""}`}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
            <ClipboardTaskListLtr24Regular />
            <Text className="text-white" style={{ marginLeft: "8px" }}>
                {"Data Source"}
            </Text>
            {isHover && (
                <Text
                    style={{
                        marginLeft: "10px",
                        backgroundColor: "lightgray",
                        paddingLeft: "5px",
                        borderRadius: "8px",  // Increase the value for more rounded corners
                        color: "#000",
                        border: "1px solid #ccc",
                    }}
                >
                   Check here for Data Source information.
                </Text>
            )}
        </div>
    );
};