export interface carouselDataProps {
  carouselData: {
    id: string;
    name: string;
    alt: string;
    url: string;
  }[];
}

export interface buttonProps {
  src: string;
  clickFunction: React.MouseEventHandler<HTMLElement>;
}
