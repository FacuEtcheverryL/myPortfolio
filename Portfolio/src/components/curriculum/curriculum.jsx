import "./curriculum.css";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function curriculum() {
  return (
    <>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }} s>
          <Document file="https://raw.githubusercontent.com/FacuEtcheverryL/myPortfolio/b1dfea4e6a1032a5bd69bb5ff4bd0a8d0c951a1d/Portfolio/src/components/curriculum/FacuLopezEtcheverryCV.pdf">
            <Page pageNumber={1} scale={1.7} />
          </Document>
        </Row>
      </Container>
    </>
  );
}

export default curriculum;
