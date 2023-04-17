import {
  QuoteAuthor,
  QuoteContainer,
  QuoteIconAuthor,
  QuoteIconMain,
  QuoteMain,
} from "./style";

export function QuoteSession() {
  return (
    <QuoteContainer>
      <QuoteMain>
        <QuoteIconMain size={32} />
        <h1>A tecnologia é a arte de criar o impossível.</h1>
      </QuoteMain>
      <QuoteAuthor>
        <p>- Theodore von Karman</p>
        <QuoteIconAuthor size={32} />
      </QuoteAuthor>
    </QuoteContainer>
  );
}
