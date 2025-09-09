import React from "react";

const styles = {
  headerTop: {
    backgroundColor: "#2c2c2c",
    color: "white",
    padding: "8px 30px",
    fontSize: "13px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  headerTopLeft: {
    display: "flex",
    gap: "18px",
  },
  headerTopRight: {
    display: "flex",
    gap: "18px",
  },
  headerMain: {
    backgroundColor: "#0d3b71",
    color: "white",
    padding: "25px 40px",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  logo: {
    height: "100px",
    marginRight: "25px",
  },
  collegeTitle: {
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "1.1",
  },
  subText: {
    fontSize: "13px",
    marginTop: "6px",
    fontStyle: "italic",
    letterSpacing: "0.7px",
  },
  navBar: {
    backgroundColor: "#10467c",
    display: "flex",
    gap: "22px",
    padding: "14px 40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "600",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    paddingBottom: "4px",
    transition: "border-bottom 0.3s",
  },
  navLinkActive: {
    borderBottom: "3px solid white",
  },
  mainContent: {
    display: "flex",
    margin: "35px 40px",
    gap: "25px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  leftPanel: {
    flex: "1",
    backgroundColor: "#003366",
    color: "white",
    padding: "25px 20px",
    borderRadius: "7px",
    fontSize: "13px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
  leftPanelImg: {
    width: "100%",
    borderRadius: "7px",
    marginBottom: "20px",
  },
  rightPanel: {
    flex: "2.2",
    backgroundColor: "#f9f9f9",
    padding: "25px 25px",
    borderRadius: "7px",
    fontSize: "14px",
    color: "#333",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: "20px",
    marginBottom: "15px",
    color: "#0d3b71",
    borderBottom: "3px solid #0d3b71",
    paddingBottom: "6px",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "12px",
    color: "#0d3b71",
    fontWeight: "600",
  },
  infoRowSpan: {
    flex: "1 1 200px",
  },
  campusImage: {
    width: "100%",
    marginTop: "30px",
    borderRadius: "7px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
  footerIcons: {
    position: "fixed",
    right: "25px",
    top: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontSize: "22px",
    color: "white",
  },
  iconButton: {
    backgroundColor: "#0d3b71",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
  },
};

const DYPWebsite = () => {
  return (
    <div>
      {/* Top Header */}
      <div style={styles.headerTop}>
        <div style={styles.headerTopLeft}>
          <span>DYP CET E-INVENTORY</span>
          <span>CITIZEN'S CHARTER</span>
          <span>ONLINE STUDENT GRIEVANCE REDRESSAL</span>
          <span>IQAC</span>
          <span>NIRF</span>
        </div>
        <div style={styles.headerTopRight}>
          <span>STAFF / STUDENT LOGIN</span>
          <span>ALUMNI</span>
          <span>आपले सरकार</span>
          <span>AICTE MANDATORY DISCLOSURE</span>
          <span>OBE</span>
          <span>CONTACT</span>
        </div>
      </div>

      {/* Main Header */}
      <div style={styles.headerMain}>
        <img
          src="logo.webp"
          alt="DYP Logo"
          style={styles.logo}
        />
        <div>
          <div style={styles.collegeTitle}>
            D Y P A T I L <br />
            COLLEGE <i>of</i> <br />
            ENGINEERING & TECHNOLOGY
          </div>
          <div style={styles.subText}>
            (AN AUTONOMOUS INSTITUTE) <br />
            KASABA BAWADA, KOLHAPUR
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav style={styles.navBar}>
        {[
          "Home",
          "About Us",
          "Academics",
          "Exam Cell",
          "Research",
          "Department",
          "Admission",
          "Campus Life",
          "Facilities",
          "Placement",
          "e-office",
          "Career",
        ].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              ...styles.navLink,
              ...(item === "Home" ? styles.navLinkActive : {}),
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <img
            src="campus.jpg"
            alt="DYP"
            style={styles.leftPanelImg}
          />
          <p>
            <b>Engineering</b> <br />
            DTE CODE - EN 06250
          </p>
          <p>
            <b>Architecture</b> <br />
            DTE CODE - AR 6532
          </p>
          <p>Accredited with 'A' Grade by NAAC</p>
          <p>Accredited by NBA</p>
          <p>An Autonomous Institute</p>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <div style={styles.sectionTitle}>WHY DYPCET</div>
          <div style={styles.infoRow}>
            <span style={styles.infoRowSpan}>
              <strong>41 YEARS OF EXCELLENCE IN TECHNICAL EDUCATION</strong>
            </span>
            <span style={styles.infoRowSpan}>
              IMMERSION PROGRAM WITH UK, EUROPEAN, MALAYSIAN UNIVERSITY
            </span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoRowSpan}>
              CENTER OF EXCELLENCE IN TECH MAHINDRA, ULTRATECH
            </span>
            <span style={styles.infoRowSpan}>
              SOU. SHIANTADEVI D. PATIL MERIT SCHOLARSHIP
            </span>
            <span style={styles.infoRowSpan}>RURAL & SOCIAL INTERNSHIP</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoRowSpan}>
              STRONG TIE-UP'S WITH INDUSTRIES
            </span>
            <span style={styles.infoRowSpan}>
              ARJUN INNOVATION INCUBATION & ENTREPRENEUR CENTRE
            </span>
            <span style={styles.infoRowSpan}>GLOBAL ALUMNI NETWORK</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoRowSpan}>NEP 2020 BASED SYLLABUS</span>
            <span style={styles.infoRowSpan}>
              320 HRS FINISHING SCHOOL TRAINING PROGRAM
            </span>
            <span style={styles.infoRowSpan}>GLOBAL CERTIFICATION PROGRAM</span>
            <span style={styles.infoRowSpan}>35+ LOCATION BUS FACILITY</span>
            <span style={styles.infoRowSpan}>100% PLACEMENT ASSISTANCE</span>
          </div>

          {/* Campus Image */}
          <img
            src="/compus.avif"
            alt="Campus"
            style={styles.campusImage}
          />
        </div>
      </div>

      {/* Floating Icons on right */}
      <div style={styles.footerIcons}>
        <div style={styles.iconButton} title="Student Login">
          🎓
        </div>
        <div style={styles.iconButton} title="Library">
          📚
        </div>
        <div style={styles.iconButton} title="Home">
          🏠
        </div>
      </div>
    </div>
  );
};

export default DYPWebsite;
