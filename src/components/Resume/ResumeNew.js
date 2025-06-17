import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfFrench from "../../Assets/../Assets/Ibrahim_Ben_Lazrak_CV_French.pdf";
import pdfEnglish from "../../Assets/../Assets/Ibrahim_Ben_Lazrak_CV_English.pdf"; // Add your English CV path
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [language, setLanguage] = useState("english"); // Default to English
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Get current PDF based on selected language
  const getCurrentPdf = () => {
    return language === "french" ? pdfFrench : pdfEnglish;
  };

  // Get current language label
  const getCurrentLanguageLabel = () => {
    return language === "french" ? "French" : "English";
  };

  // Handle PDF load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Language Selection Buttons */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Col xs="auto">
            <Button
              variant={language === "english" ? "primary" : "outline-primary"}
              onClick={() => setLanguage("english")}
              style={{ margin: "0 10px" }}
            >
              English CV
            </Button>
            <Button
              variant={language === "french" ? "primary" : "outline-primary"}
              onClick={() => setLanguage("french")}
              style={{ margin: "0 10px" }}
            >
              French CV
            </Button>
          </Col>
        </Row>

        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={getCurrentPdf()}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download {getCurrentLanguageLabel()} CV
          </Button>
        </Row>

        {/* PDF Display - All Pages */}
        {numPages && Array.from({ length: numPages }, (_, i) => i + 1).map(pageNumber => (
          <Row key={pageNumber} className="resume" style={{ marginBottom: "20px" }}>
            <Col className="d-flex justify-content-center">
              <Document 
                file={getCurrentPdf()} 
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page 
                  pageNumber={pageNumber} 
                  scale={width > 786 ? 1.7 : 0.6} 
                />
              </Document>
            </Col>
          </Row>
        ))}

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={getCurrentPdf()}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download {getCurrentLanguageLabel()} CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;