import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer({
    variant="simple",
    companyName="Imperial Net",
    year=new Date().getFullYear(),
    showSocial=false,
    showLinks=false,
    links=[],
    socialLinks=[],
    backgroundColor,
    textColor,
    className="",
    ...props
}) {
    const footerClasses = [
        styles.footer,
        styles[`footer--${variant}`],
        className,
    ]
    .filter(Boolean)
    .join(" ");

    const footerStyle = {
      ...(backgroundColor && {backgroundColor}),
      ...(textColor && {color: textColor}),
    };

    return (
        <footer className={footerClasses} style={footerStyle} {...props}>
        <div className={styles.footerContainer}>
            {/* Extended variant with links */}
            {variant === "extended" && showLinks && links.length > 0 && (
                <div className={styles.footerLinks}>
                    <nav className={styles.footerNav}>
                        {links.map((link, index) => (
                            link.external ? (
                                <a
                                key={index} 
                                href={link.to}
                                className={styles.footerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    {link.label}
                                    </a>
                            ) : (
                                <Link
                                key={index}
                                to={link.to}
                                className={styles.footerLink}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </nav>
                </div>
            )}

            {/* Social media links */}
            {showSocial && socialLinks.length > 0 && (
                <div className={styles.footerSocial}>
                    {socialLinks.map((social, index) => (
                        <a
                        key={index}
                            href={social.href}
                            className={styles.footerSocialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                            >
                            {social.icon || social.platform}
                        </a>
                    ))}
                </div>
            )}

            {/* Copyright */}
            <div className={styles.footerCopyright}>
                <small>
                    {companyName} © {year}
                    {variant === "extended" && " — All rights reserved"}
                    {variant === "simple" && " — Internal Component Library"}
                    </small>
            </div>
        </div>
        </footer>
    );
}