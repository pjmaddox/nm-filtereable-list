const mockData = {
    statusCode: 200,
    results: [
        { codeName: "someCodeName1", agentImage: "someAgentImage1", country: "someCountry1", fullName: "Some FullName1" },
        { codeName: "someCodeName2", agentImage: "someAgentImage2", country: "someCountry2", fullName: "Some FullName2" },
        { codeName: "someCodeName3", agentImage: "someAgentImage3", country: "someCountry3", fullName: "Some FullName3" },
        { codeName: "someCodeName4", agentImage: "someAgentImage4", country: "someCountry4", fullName: "Some FullName4" }
    ]
}

//Mock Agent Service
export default async () => {
    const response = await new Promise((resolve) => {
        resolve(mockData);
    });
    return response;
};