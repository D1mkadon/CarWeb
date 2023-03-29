import Link from "next/link";
import React, { useState } from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <footer className={styles.footer}>
      <h3 className={styles.h3}> DIM Corporation &copy; 2023</h3>
      <div className={styles.MainBlock}>
        <div>
          <p>About Us</p>
          <Link
            href={{
              pathname: "/about/Group",
              query: {
                show: show,
              },
            }}
          >
            Mercedes-Benz Group AG
          </Link>
          <Link href={"/about/BusinessUnits"}>Business Units</Link>
          <Link href={"/about/Investors"}>Investors</Link>
          <Link href={"/about/Press"}>Press</Link>
        </div>
        <div>
          <p>Careers</p>
          <Link href={"/about/Job"}>Job Search</Link>
          <Link href={"/about/Professionals"}>Professionals</Link>
          <Link href={"/about/Graduates"}>Graduates</Link>
          <Link href={"/about/Students"}>Students</Link>
          <Link href={"/about/Talents"}>Talent Programs</Link>
        </div>
        <div>
          <p>Knowledge Center</p>
          <Link href={"/about/Consumption"}>Consumption & Emissions</Link>
          <Link href={"/about/Storage"}>Mercedes-Benz Energy Storage</Link>
          <Link href={"/about/Emissions"}>Real Driving Emissions</Link>
          <Link href={"/about/Availability"}>Semiconductor Availability</Link>
          <Link href={"/about/Test"}>UN 38.3 Test</Link>
        </div>
        <div>
          <p>Business Services</p>
          <Link href={"/about/FleetSales"}>Fleet Sales</Link>
          <Link href={"/about/DiplomaticSales"}>
            International Diplomatic Sales
          </Link>
          <Link href={"/about/Dealers"}>Training for Authorized Dealers</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
