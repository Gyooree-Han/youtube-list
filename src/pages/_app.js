import '@/styles/globals.css'

import wrapper from "lib/store/configureStore";
import PropTypes from "prop-types";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(App);

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
