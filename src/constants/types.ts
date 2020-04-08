// export type RecognizeFiles = 'extension' | 'implicate';
// export type PathType = 'extension' | 'implicate';
export type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };
