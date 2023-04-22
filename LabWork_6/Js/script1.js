let Document = {
    Header: "",
    Body: "",
    Footer: "",
    Date: "",
    Application: {
      Header: "",
      Body: "",
      Footer: "",
      Date: ""
    },
    complete_the_Document: function(Header, Body, Footer, Date) {
      this.Header = Header;
      this.Body = Body;
      this.Footer = Footer;
      this.Date = Date;
    },
    displayDocument: function() {
      console.log(`Header: ${this.Header}`);
      console.log(`Body: ${this.Body}`);
      console.log(`Footer: ${this.Footer}`);
      console.log(`Date: ${this.Date}`);
      console.log(`Application: Header: ${this.Application.Header}`);
      console.log(`             Body: ${this.Application.Body}`);
      console.log(`             Footer: ${this.Application.Footer}`);
      console.log(`             Date: ${this.Application.Date}`);
    }
  };
  
  Document.complete_the_Document("Header документа", "Текст документа", "Footer документа", "01.01.2023");
  Document.Application.Header = "Header Application";
  Document.Application.Body = "Body Application";
  Document.Application.Footer = "Footer Application";
  Document.Application.Date = "22.04.2023";
  Document.displayDocument();