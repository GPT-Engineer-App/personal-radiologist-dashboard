import { Box, Flex, Heading, Text, VStack, Image, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaXRay, FaCalendarAlt, FaFileMedical } from "react-icons/fa";

const Index = () => {
  const reports = [
    {
      id: 1,
      type: "X-Ray",
      time: "2023-09-15 14:00",
      description: "Chest X-Ray",
      icon: FaXRay,
    },
    {
      id: 2,
      type: "MRI",
      time: "2023-09-20 09:00",
      description: "Brain MRI",
      icon: FaFileMedical,
    },
    {
      id: 3,
      type: "CT Scan",
      time: "2023-09-25 16:00",
      description: "Abdominal CT Scan",
      icon: FaFileMedical,
    },
  ];

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          Personal Radiologist Dashboard
        </Heading>
        <Text>Welcome to your personal radiologist dashboard. Here you can find all your upcoming and past radiology exams.</Text>
        <SimpleGrid columns={3} spacing={10}>
          {reports.map((report) => (
            <Flex key={report.id} p={5} boxShadow="md" borderRadius="lg" flexDirection="column" alignItems="center">
              <Icon as={report.icon} w={10} h={10} mb={2} />
              <Text fontWeight="bold">{report.type}</Text>
              <Text fontSize="sm">{report.description}</Text>
              <Flex alignItems="center">
                <Icon as={FaCalendarAlt} />
                <Text ml={2}>{report.time}</Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;
