// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [    
    { text: "Describe each of the credit risk ratings", value: "Describe each of the credit risk ratings" },
    { text: "What is the OCC's policy on using OCC information technology and resources?", value: "What is the OCC's policy on using OCC information technology and resources?" },
    { text: "What is required of an internal audit program?", value: "What is required of an internal audit program?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
