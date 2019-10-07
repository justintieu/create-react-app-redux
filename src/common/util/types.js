// flow
export type Action = $ReadOnly<{|
    type: string
|}> &
    Object;

export type NoArgsHandler = () => void;
