import React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import Halt from "../components/header/halt";
import "../components/css-pages/usuario.css";
import Footer from "../components/footer/Footer";
import { StaticImage } from "gatsby-plugin-image";
import BtnTertiary from "../components/buttons/BtnTertiary";
import BtnPrimary from "../components/buttons/BtnPrimary";
import BtnBack from "../components/buttons/BtnBack";

function Usuario() {
  // Imagen de icono de QR
  const qrIcon = (
    <StaticImage
      src="../images/QRs/qrnegro.png"
      alt="Icono de QR"
      height={40}
    />
  );

  return (
    <>
      <Halt />
      <div className="user">
        <BtnTertiary className="piolin">
          {qrIcon}
          &nbsp;Cambiar imagen
        </BtnTertiary>
        <br />
        <BtnTertiary className="piolin">
          {qrIcon}
          &nbsp;Cambiar nombre
        </BtnTertiary>
        <br />
        <BtnTertiary className="piolin">
          {qrIcon}
          &nbsp;Cambiar contraseña
        </BtnTertiary>
        <br />
        <BtnPrimary className="piolin">
          {qrIcon}
          &nbsp;Ver mis QR
        </BtnPrimary>
        <br />
        <Link to="/listausuarios">
          <BtnPrimary className="piolin">
            {qrIcon}
            &nbsp;Ver usuarios
          </BtnPrimary>
        </Link>
      </div>
      <BtnBack />
      <Footer />
    </>
  );
}

export const Head = () => <Seo title="Usuario" />;
export default Usuario;
