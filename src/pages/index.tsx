import Home, { HomeTemplateProps } from 'templates/Home';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

//ATENCAO
//COMANDO yarn next export gera um estatico purao pra landing pages

// getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps metodo para SSG, vai gerar o estatico em build time
//getServerSideProps metodo para SSR, vai gerar o estatico para cada request

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  };
}
