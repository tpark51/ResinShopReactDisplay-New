import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import ViewAllCustomers from "./CustomerComponents/ViewAllCustomers";
import ViewAllOrders from "./OrderComponent/ViewAllOrders";
import ViewAllQuotes from "./QuoteComponets/ViewAllQuotes";
import ViewOneCustomer from "./CustomerComponents/ViewOneCustomer";
import ViewOneOrder from "./OrderComponent/ViewOneOrder";
import ViewOneQuote from "./QuoteComponets/ViewOneQuote";
import ViewDashboard from "./Dashboard/ViewDashboard";
import ViewDashboards from "./Dashboard/ViewDashboards";

function AdminPortal() {
  return (
    <Container maxWidth="md">
      <Typography gutterBottom variant="h2" align="center">
        <div
          style={{
            color: "pink",
          }}
        >
          Admin Portal
        </div>
      </Typography>
      <Router>
        <nav align="center"
            style={{
              border: "5px solid",
              borderColor: "pink",
              padding: "12px 60px",
              fontSize: "20px",
              color: "pink",
            }}
          >
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/all-customers"> Customers </Link>
            <Link to="/all-orders"> Orders </Link>
            <Link to="/all-quotes"> Quotes </Link>
        </nav>
        <br></br>
        <Routes>
          <Route path="/dashboard" element={<ViewDashboards />} />
          <Route path="/all-customers" element={<ViewAllCustomers />} />
          <Route path="/all-orders" element={<ViewAllOrders />} />
          <Route path="/all-quotes" element={<ViewAllQuotes />} />

          <Route path="view-customer">
            <Route path=":id" element={<ViewOneCustomer />} />
          </Route>
          <Route path="view-order">
            <Route path=":id" element={<ViewOneOrder />} />
          </Route>
          <Route path="view-quote">
            <Route path=":id" element={<ViewOneQuote />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default AdminPortal;
