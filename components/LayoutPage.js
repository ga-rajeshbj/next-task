import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function index({ children, session }) {
  return (
    <div id="page-top">
      <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
          <SessionProvider session={session}>
            <SideBar />
          </SessionProvider>
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" class="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              <SessionProvider session={session}>
                <NavBar />
              </SessionProvider>
              {/* <!-- End of Topbar --> */}
              {/* <!-- Begin Page Content --> */}

              {children}
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* <!-- End of Page Wrapper --> */}
        {/* <!-- Scroll to Top Button--> */}

        {/*<!-- Page level plugins --> */}
        <Script src="vendor/chart.js/Chart.min.js" />
        {/*<!-- Page level custom Scripts --> */}
        <Script src="js/demo/chart-area-demo.js" />
        <Script src="js/demo/chart-pie-demo.js" />
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default index;
export async function getServerSideProps() {
  return {
    props: {
      session: await getSession(),
    },
  };
}
