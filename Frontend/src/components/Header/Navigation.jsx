import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "Service",
    href: "/#our-services",
    children: [
      { label: "OnCampus", href: "/oncampus" },
      { label: "Offcampus", href: "/offcampus" },
      { label: "Seminar", href: "/seminar" },
      { label: "Counselling", href: "/counselling" },
      { label: "CareerCraft", href: "/careercraft" },
      {
        label: "Workforce provider",
        subLabel: "Staffing solution",
        href: "/workforce",
      },
    ],
  },
  {
    label: "Jobs",
    href: "/#ready-to-transform",
    children: [
      { label: "Current opening", href: "/jobs/current-opening" },
      { label: "Post your Resume", href: "/jobs/post-resume" },
    ],
  },
  { label: "Employer", href: "/employer" },
  { label: "College", href: "/college" },
  { label: "CampusToCubicle", href: "/campus-to-cubicle" },
  { label: "Contact us", href: "/contact" },
];

const DesktopNav = () => {
  const { pathname } = useLocation(); // Get current path
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("blue.400", "blue.300");
  const activeTabBgColor = useColorModeValue("teal.50", "white.700");
  const activeBorderColor = useColorModeValue("blue.500", "blue.300");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        const isActive =
          pathname === navItem.href ||
          (navItem.children &&
            navItem.children.some((child) => pathname === child.href));

        return (
          <Box key={navItem.label}>
            {navItem.children ? (
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    as={Link}
                    to={navItem.href}
                    p={2}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={isActive ? linkHoverColor : linkColor}
                    bg={isActive ? activeTabBgColor : "transparent"}
                    borderRadius="md"
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                      bg: "blue.50",
                    }}
                    borderBottom={isActive ? "4px solid" : "none"}
                    borderColor={linkHoverColor}
                  >
                    {navItem.label}
                  </Box>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              </Popover>
            ) : (
              <Box
                as={Link}
                to={navItem.href}
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={isActive ? linkHoverColor : linkColor}
                bg={isActive ? activeTabBgColor : "transparent"}
                borderRadius="md"
                _hover={{
                  textDecoration: "none",
                      color: linkHoverColor,
                      bg: "blue.50",
                }}
                borderBottom={isActive ? "4px solid" : "none"}
                borderColor={linkHoverColor}
              >
                {navItem.label}
              </Box>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  const subNavHoverColor = useColorModeValue("blue.400", "blue.300");
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link to={href}>
      <Box
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{
          bg: useColorModeValue("blue.50", "gray.900"),
          position: "relative",
        }}
        borderBottom={isActive ? "2px solid" : "none"}
        borderColor={subNavHoverColor}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text transition={"all .3s ease"} fontWeight={500}>
              {label}
            </Text>
            {subLabel && <Text fontSize={"sm"}>{subLabel}</Text>}
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};

const MobileNav = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Stack bg={bg} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "gray.200");
  const hoverColor = useColorModeValue("blue.400", "blue.300");
  const { pathname } = useLocation();
  const activeTabBgColor = useColorModeValue("teal.50", "white.700");
  const isActive = pathname === href || (children && children.some(child => pathname === child.href));

  return (
    <Stack spacing={4} onClick={children ? onToggle : undefined}>
      <Flex
        as={Link}
        to={href ?? "#"}
        py={2}
        justify="space-between"
        align="center"
        color={isActive ? hoverColor : textColor}
        bg={isActive ? activeTabBgColor : "transparent"}
        borderRadius="md"
        _hover={{
          textDecoration: "none",
          color: hoverColor,
          bg: "blue.50",
        }}
        borderBottom={isActive ? "4px solid" : "none"}
        borderColor={hoverColor}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            w={6}
            h={6}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={hoverColor}
          align="start"
        >
          {children &&
            children.map((child) => (
              <Box
                as={Link}
                key={child.label}
                py={2}
                to={child.href}
                fontSize="sm"
                fontWeight={500}
                color={pathname === child.href ? hoverColor : textColor}
                bg={pathname === child.href ? activeTabBgColor : "transparent"}
                borderRadius="md"
                _hover={{
                  textDecoration: "none",
                  color: hoverColor,
                  bg: "blue.50",
                }}
                borderBottom={pathname === child.href ? "2px solid" : "none"}
                borderColor={hoverColor}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const Navigation = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navigation;

export { DesktopNav, MobileNav };

