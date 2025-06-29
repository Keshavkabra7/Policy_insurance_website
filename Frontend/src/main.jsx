import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
// import User from './components/user/User.jsx'

import "bootstrap/dist/css/bootstrap.min.css";

import Form from "./components/Formpage.jsx";
import Policies from "./components/Policies.jsx";
import Home_form from "./components/Home_form.jsx";
import VehicleForm from "./components/VehicleForm.jsx";
import PoliciesTable from "./components/PoliciesTable.jsx";
import ClaimForm from "./components/ClaimForm.jsx";
import PremiumPaymentForm from "./components/PremiumPaymentForm.jsx";
import Customer_form from "./components/Customer/Customer_form.jsx";
import LoginBoxes from "./components/Login.jsx";
import CustomerLoginPage from "./components/CustomerLoginPage.jsx";
import AgentLoginPage from "./components/AgentLoginPage.jsx";
import DamageInspectorLoginPage from "./components/DamageInspectorLoginPage.jsx";

import UserLayout from "./components/user/UserLayout.jsx";
import Incident_form from "./components/user/Incident_form.jsx";
import ApplicationRead from "./components/user/ApllicationRead.jsx";
import CustomerPage from "./components/user/CustomerPage.jsx";
import QuotePage from "./components/user/QuotePage.jsx";
import InsurancePolicyPage from "./components/user/InsurancePolicyPage.jsx";
import ClaimSettlementPage from "./components/user/ClaimSettlementPage.jsx";
import OfficePage from "./components/user/OfficePage.jsx";
import MembershipPage from "./components/user/Membership/MembershipPage.jsx";
import ButtonPage from "./components/user/Membership/ButtonPage.jsx";
import Membership_form from "./components/user/Membership/Membership_form.jsx";
import VehicleServicePage from "./components/user/VehicleServicePage.jsx";
import NOKPage from "./components/user/NOKPage.jsx";
import InsuranceCompaniesPage from "./components/user/InsuranceCompaniesPage.jsx";
import PolicyRenewablePage from "./components/user/PolicyRenewablePage.jsx";
import IncidentPage from "./components/user/IncidentPage.jsx";
import IncidentReportPage from "./components/user/IncidentReportPage.jsx";
import CoveragePage from "./components/user/CoveragePage.jsx";
import ProductPage from "./components/user/ProductPage.jsx";
import ReceiptPage from "./components/user/ReceiptPage.jsx";
import Claim from "./components/Claim.jsx";
import DamageInspectorLayout from "./components/DamageInspector/DamageInspectorLayout.jsx";
import InsurancePolicyPage1 from "./components/DamageInspector/InsurancePolicyPage1.jsx";
import IncidentPage1 from "./components/DamageInspector/IncidentPage1.jsx";
import ProductPage1 from "./components/DamageInspector/ProducrPage1.jsx";
import AdminPanel from "./components/DamageInspector/AdminPanel.jsx";
import IncidentReportPage1 from "./components/DamageInspector/IncidentReportPage1.jsx";
import Incident_form1 from "./components/DamageInspector/Incident_form1.jsx";
import CustomerSignup from "./components/CustomerSignup.jsx";
import DamageInspectorSignup from "./components/DamageInspectorSignup.jsx";
import AgentSignup from "./components/AgentSignup.jsx";

// insurance agent ///////////////////////////////////////

import Agent_layout from "./components/Insuarnce_agent/Agent_layout.jsx";
import Application from "./components/Insuarnce_agent/Application/Application.jsx";
import Customer_agent from "./components/Insuarnce_agent/Customer/Customer_agent.jsx";
import Quote_agent from "./components/Insuarnce_agent/Quote/Quote_agent.jsx";
import Insuarnce_policy_agent from "./components/Insuarnce_agent/Insurance policy/Insuarnce_policy_agent.jsx";
import Claim_settlement_agent from "./components/Insuarnce_agent/Claim settlement/Claim_settlement_agent.jsx";
import Office_agent from "./components/Insuarnce_agent/Office/Office_agent.jsx";
import Membership_agent from "./components/Insuarnce_agent/Membership_agent/Membership_agent.jsx";
import Vehicle_service from "./components/Insuarnce_agent/Vehicle service/Vehicle_service.jsx";
import Nok from "./components/Insuarnce_agent/NOK/Nok.jsx";
import Insuarnce_company_agent from "./components/Insuarnce_agent/Insurance company/Insurance_company_agent.jsx";
import Incident_agent from "./components/Insuarnce_agent/Incident/Incident_agent.jsx";
import Policy_renewable_agent from "./components/Insuarnce_agent/Policy_renewable/Policy_renewable_agent.jsx";
import Incident_report from "./components/Insuarnce_agent/Incident_report/Incident_report.jsx";
import Coverage from "./components/Insuarnce_agent/Coverage/Coverage.jsx";
import Product from "./components/Insuarnce_agent/Product/Product.jsx";
import Receipt from "./components/Insuarnce_agent/Reciept/Receipt.jsx";
import ClaimAgent from "./components/Insuarnce_agent/Claim/ClaimAgent.jsx";
import Premium_payment from "./components/Insuarnce_agent/Premium_payment/Premium_payment.jsx";
import Vehicle from "./components/Insuarnce_agent/Vehicle_agent/Vehicle.jsx";
import Department from "./components/Insuarnce_agent/Department/Department.jsx";
import Staff from "./components/Insuarnce_agent/Staff/Staff.jsx";
import Customer_agent_form from "./components/Insuarnce_agent/Customer/Customer_agent_form.jsx";
import Application_form from "./components/Insuarnce_agent/Application/Application_form.jsx";
import Policy_quote_form from "./components/Insuarnce_agent/Quote/Policy_quote_form.jsx";
import Insurance_policy_form from "./components/Insuarnce_agent/Insurance policy/Insurance_policy_form.jsx";
import Membership_formAgent from "./components/Insuarnce_agent/Membership_agent/Membership_formAgent.jsx";
import Vehicle_service_form from "./components/Insuarnce_agent/Vehicle service/Vehicle_service_form.jsx";
import Nok_form from "./components/Insuarnce_agent/NOK/Nok_form.jsx";
import Policy_renewable_form from "./components/Insuarnce_agent/Policy_renewable/Policy_renewable_form.jsx";
import Incident_report_form from "./components/Insuarnce_agent/Incident_report/Incident_report_form.jsx";
import Coverage_form from "./components/Insuarnce_agent/Coverage/Coverage_form.jsx";
import Product_form from "./components/Insuarnce_agent/Product/Product_form.jsx";
import Receipt_form from "./components/Insuarnce_agent/Reciept/Reciept_form.jsx";
import Claim_form from "./components/Insuarnce_agent/Claim/Claim_form.jsx";
import Department_form from "./components/Insuarnce_agent/Department/Department_form.jsx";
import Staff_form from "./components/Insuarnce_agent/Staff/Staff_form.jsx";
import Payment_form from "./components/Insuarnce_agent/Premium_payment/Payment_form.jsx";
import Vehicle_form from "./components/Insuarnce_agent/Vehicle_agent/Vehicle_form.jsx";
import Claim_settlement_form from "./components/Insuarnce_agent/Claim settlement/Claim_settlement_form.jsx";
import Incident_formagent from "./components/Insuarnce_agent/Incident/Incident_formagent.jsx";
import Homeuser from "./components/user/Homeuser.jsx";

/// creating routers.///////////////////////////////////////////////////

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* <Route path="form" element={<Form />} /> */}

      <Route path="policies" element={<Policies />} />
      {/* <Route path="home_form" element={<Home_form />} /> */}
      {/* <Route path="vehicleform" element={<VehicleForm />} /> */}
      {/* <Route path="policytable" element={<PoliciesTable />} /> */}
      {/* <Route path="claimform" element={<ClaimForm />} /> */}
      {/* <Route path="premiumpayment" element={<PremiumPaymentForm />} /> */}
      {/* <Route path='Customerread' element={<Customer_read />} /> */}
      {/* <Route path="Customerform" element={<Customer_form />} /> */}
      <Route path="login" element={<LoginBoxes />} />
      <Route path="customer/login" element={<CustomerLoginPage />} />
      <Route path="customer/signup" element={<CustomerSignup />} />
      <Route path="agent/login" element={<AgentLoginPage />} />
      <Route path="agent/signup" element={<AgentSignup />} />
      <Route path="inspector/login" element={<DamageInspectorLoginPage />} />
      <Route path="inspector/signup" element={<DamageInspectorSignup />} />

      {/* <Route path="claim" element={<Claim />} /> */}

      {/*//////////////////   user route  customer route   ////////////////////*/}

      <Route path="userlayout" element={<UserLayout />}>
        <Route path="" element={<Homeuser />} />
        <Route path="Customerform" element={<Customer_form />} />
        <Route path="incidentform" element={<Incident_form />} />
        <Route path="application" element={<ApplicationRead />} />
        <Route path="customer_read" element={<CustomerPage />} />
        <Route path="quote_read" element={<QuotePage />} />
        <Route path="quoteform" element={<Policy_quote_form />} />
        <Route path="insurance_read" element={<InsurancePolicyPage />} />
        <Route path="claimsettlement" element={<ClaimSettlementPage />} />
        <Route path="officepage" element={<OfficePage />} />
        <Route path="buttonpage" element={<ButtonPage />} />
        <Route path="memberpage" element={<MembershipPage />} />
        <Route path="memberform" element={<Membership_form />} />
        <Route path="vehicleservicepage" element={<VehicleServicePage />} />
        <Route path="nok" element={<NOKPage />} />
        <Route path="ICP" element={<InsuranceCompaniesPage />} />
        <Route path="PRP" element={<PolicyRenewablePage />} />
        <Route path="IP" element={<IncidentPage />} />
        <Route path="IRP" element={<IncidentReportPage />} />
        <Route path="CoverageP" element={<CoveragePage />} />
        <Route path="PP" element={<ProductPage />} />
        <Route path="RP" element={<ReceiptPage />} />
      </Route>

      {/* ///////////////////////////////////  agents    ////////////////////////////////////// */}

      <Route path="agentlayout" element={<Agent_layout />}>
      <Route path="" element={<Customer_agent />} />
        <Route path="quote_read" element={<QuotePage />} />
        <Route path="application" element={<Application />} />
        <Route path="applicationform" element={<Application_form />} />
        <Route path="customer" element={<Customer_agent />} />
        <Route path="quote" element={<Quote_agent />} />
        <Route path="quoteform" element={<Policy_quote_form />} />

        
        <Route path="insurancepolicy" element={<Insuarnce_policy_agent />} />
        
        <Route path="claimsettle" element={<Claim_settlement_agent />} />
        <Route path="office" element={<Office_agent />} />
        <Route path="membership" element={<Membership_agent />} />
        <Route path="vehicleservice" element={<Vehicle_service />} />
        <Route path="nok" element={<Nok />} />
        <Route path="insurancecompany" element={<Insuarnce_company_agent />} />
        <Route path="policyrenewable" element={<Policy_renewable_agent />} />
        <Route path="incident" element={<Incident_agent />} />
        <Route path="iform" element={<Incident_formagent />} />
        <Route path="incidentreport" element={<Incident_report />} />
        <Route path="coverage" element={<Coverage />} />
        <Route path="product" element={<Product />} />
        <Route path="receipt" element={<Receipt />} />
        <Route path="claimagent" element={<ClaimAgent />} />
        <Route path="payment" element={<Premium_payment />} />
        <Route path="paymentform" element={<Payment_form />} />
        <Route path="vehicle" element={<Vehicle />} />
        <Route path="vform" element={<Vehicle_form />} />

        <Route path="staff" element={<Staff />} />
        <Route path="department" element={<Department />} />
        <Route path="customerform" element={<Customer_agent_form />} />
        <Route path="policyform" element={<Insurance_policy_form />} />
        <Route path="memberformagent" element={<Membership_formAgent />} />
        <Route path="vsform" element={<Vehicle_service_form />} />
        <Route path="nokform" element={<Nok_form />} />
        <Route path="prform" element={<Policy_renewable_form />} />
        <Route path="irform" element={<Incident_report_form />} />
       
        <Route path="coform" element={<Coverage_form />} />
        <Route path="pform" element={<Product_form />} />
        <Route path="rform" element={<Receipt_form />} />
        <Route path="clform" element={<Claim_form />} />
        <Route path="dform" element={<Department_form />} />
        <Route path="sform" element={<Staff_form />} />
        <Route path="vform" element={<Vehicle_form />} />
        <Route path="csform" element={<Claim_settlement_form />} />
      </Route>

      {/* ///////////////////////////  Damage inspector path  ////////////////////////////// */}

      <Route path="inspectorlayout" element={<DamageInspectorLayout />}>
        <Route path="" element={<InsurancePolicyPage1 />} />
        <Route path="insuracepolicypage1" element={<InsurancePolicyPage1 />} />
        <Route path="incident1" element={<IncidentPage1 />} />
        <Route path="productpage1" element={<ProductPage1 />} />
        <Route path="adminpanel" element={<AdminPanel />} />
        <Route path="incidentreportpage" element={<IncidentReportPage1 />} />
        <Route path="incidentform1" element={<Incident_form1 />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
