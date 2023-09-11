export interface Message {
  type: string;
  title?: string;
  content?: string;
}

export function isMessage(obj: any): obj is Message {
  return (
    obj && typeof obj.content === "string" && typeof obj.title === "string"
  );
}
