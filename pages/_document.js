import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/*Bootstrap core JavaScript*/}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* Core plugin JavaScript */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* Custom scripts for all pages */}
        <script src="js/sb-admin-2.min.js"></script>

        {/* Page level plugins */}
        <script src="vendor/chart.js/Chart.min.js"></script>

        <script src="vendor/jquery/jquery.min.js"></script>
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        {/* Custom styles for this template*/}

        <link href="css/sb-admin-2.min.css" rel="stylesheet" />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"
        ></script>
      </body>
    </Html>
  );
}
