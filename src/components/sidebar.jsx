import React from "react";

import briefcase1 from "../asset/briefcase 1.svg";
import briefcase from "../asset/briefcase.svg";
import home from "../asset/home.svg";
import users from "../asset/user-friends.svg";
import guarantors from "../asset/guarantors.svg";
import loan from "../asset/loans.svg";
import handshake from "../asset/handshake.svg";
import piggyBank from "../asset/piggy-bank.svg";
import loanRequest from "../asset/loan-request.svg";
import whiteList from "../asset/white-list.svg";
import karma from "../asset/karma.svg";
import savingsIcon from "../asset/savings.svg";
import coins from "../asset/coins-solid.svg";
import transactionIcon from "../asset/transactions.svg";
import serviceIcon from "../asset/services.svg";
import serviceAccountIcon from "../asset/service account.svg";
import settlementIcon from "../asset/settlements.svg";
import reportIcon from "../asset/report.svg";
import preferenceIcon from "../asset/preference.svg";
import fees from "../asset/fees and pricing.svg";
import audit from "../asset/audit.svg";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-box">
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={briefcase1} alt="icons" />{" "}
              <select
                name="category"
                className="sidebar__organization-category"
              >
                <option value="Organization">Switch Organization</option>
              </select>
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={home} alt="icons" />
              Dashboard
            </a>
          </li>
        </ul>

        <ul className="sidebar__nav-box">
          <h3>CUSTOMERS</h3>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={users} alt="icons" /> Users
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={guarantors} alt="icons" />
              Guarantors
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={loan} alt="icons" />
              Loans
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={handshake} alt="icons" />
              Decision Models
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={piggyBank} alt="icons" />
              Savings
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={loanRequest} alt="icons" />
              Loan Requests
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={whiteList} alt="icons" />
              Whitelist
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={karma} alt="icons" />
              Karma
            </a>
          </li>
        </ul>

        <ul className="sidebar__nav-box">
          <h3>BUSINESSES</h3>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={briefcase} alt="icons" /> Organization
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={loan} alt="icons" />
              Loan Products
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={savingsIcon} alt="icons" />
              Savings Products
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={coins} alt="icons" />
              Fees and Charges
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={transactionIcon} alt="icons" />
              Transactions
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={serviceIcon} alt="icons" />
              Services
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={serviceAccountIcon} alt="icons" />
              Service Account
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={settlementIcon} alt="icons" />
              Settlements
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <img src={reportIcon} alt="icons" />
              Reports
            </a>
          </li>
        </ul>

        <ul className="sidebar__nav-box">
          <h3>SETTINGS</h3>
          <li>
            <a href="/" className="sidebar__nav-link">
              <span>
                <img src={preferenceIcon} alt="icon" />
              </span>{" "}
              Preferences
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <span>
                <img src={fees} alt="icon" />
              </span>
              Fees and Pricing
            </a>
          </li>
          <li>
            <a href="/" className="sidebar__nav-link">
              <span>
                <img src={audit} alt="icon" />
              </span>
              Audit Logs
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
