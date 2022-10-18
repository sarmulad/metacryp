import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "../Theme";

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(p) => (p.background ? p.background : "transparent")};
  font-weight: 400;
  font-size: 16px;
  color: ${(p) => (p.color ? p.color : Colors.Black)};
  border: none;
  border-radius: ${(p) => (p.round ? "32px" : "5px")};
  width: ${(p) => (p.width ? p.width : "180px")};
  height: 51px;
  border: 1px solid #32E2B8;
  gap:10px;
`;
export default Button;
