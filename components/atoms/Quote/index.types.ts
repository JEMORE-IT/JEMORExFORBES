export default interface QuoteProps {
    content: string;
    colored?: string;
    color?: string
    layout?: "center" | "justify" | "right" | "left";
}