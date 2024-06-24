import React, { useState } from "react";
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const PostJob = ({ onJobPosted }) => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    // For now, we'll just pass it to the parent component
    onJobPosted({
      ...jobData,
      id: Date.now(), // Use timestamp as a temporary ID
    });
    toast({
      title: "Job Posted",
      description: "Your job listing has been successfully posted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset form
    setJobData({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Post a New Job
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Job Title</FormLabel>
              <Input name="title" value={jobData.title} onChange={handleInputChange} placeholder="e.g. Frontend Developer" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company</FormLabel>
              <Input name="company" value={jobData.company} onChange={handleInputChange} placeholder="e.g. TechCorp" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input name="location" value={jobData.location} onChange={handleInputChange} placeholder="e.g. New York, NY" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Salary Range</FormLabel>
              <Input name="salary" value={jobData.salary} onChange={handleInputChange} placeholder="e.g. $80,000 - $120,000" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Job Description</FormLabel>
              <Textarea name="description" value={jobData.description} onChange={handleInputChange} placeholder="Describe the job role and requirements" />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" width="full">
              Post Job
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default PostJob;