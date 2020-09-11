export type IuseCustomHook = (initialValue: string) => (
  [string, (value:string) => void]
)
