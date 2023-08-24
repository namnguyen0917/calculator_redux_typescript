export interface dataA {
    title: string, type: string, value: string,
}

export interface dataB {
    title: number, type: string, value: string,
}

export default interface listProps {
    datas :(dataA | dataB)[];
}