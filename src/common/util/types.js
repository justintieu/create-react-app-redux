// flow
export type Action = {
    +type: string
} & Object;

export type NoArgsHandler = () => void;