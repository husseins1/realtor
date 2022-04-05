import { Avatar, Box, Button, Input, LinkBox, useDisclosure } from "@chakra-ui/react";
import styles from "@/styles/Header.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import react from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = react.useRef();
  return (
    <div dir="rtl" className={styles.header}>
      <span ref={btnRef} onClick={onOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.hamburger}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div className={styles.header__logo}>العزيز</div>
      <Dropdown />
      <Avatar
        className={styles.avatar}
        bg={"red.700"}
        height={50}
        width={50}
        size="xl"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        className={styles.drawer}
        display={{ sm: "block", md: "none" }}
        
      >
        <DrawerOverlay />
        <DrawerContent display={{lg:"none"}} bgColor={"#101d2c"} color={"#fff"}>
            <DrawerHeader textAlign={"right"}>العزيز</DrawerHeader>
          
          <Accordion   allowToggle>
            <AccordionItem  >
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                    <LinkBox textAlign={"right"} flex={1}>
                  <Link  href="#" >
                    اشتري
                  </Link>
                    </LinkBox>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem  >
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                    <LinkBox textAlign={"right"} flex={1}>
                  <Link  href="#" >
                    بيع
                  </Link>
                    </LinkBox>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem  >
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                    <LinkBox textAlign={"right"} flex={1}>
                  <Link  href="#" >
                    اجر
                  </Link>
                    </LinkBox>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            
          </Accordion>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
