"use client";
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import Playtrailer from "../components/Playtrailer";

const page = () => {
    return (
        <div className="bg-white text-black min-h-[60vh] ">
            <Playtrailer/>
           
            <TableContainer className="w-[80vw] m-auto mt-16 ">
                <Table variant="simple">
                    <TableCaption>
                        <span className="text-red-500">*Note:</span>
                        <p>Rs. 100/- additional charge for 3D shows.</p>
                        <span className="text-red-500">*</span><p>
                            Weekdays terms will not be applicable for movies
                            releasing on weekdays.
                        </p>
                        
                    </TableCaption>
                    <Thead>
                        <Tr className="bg-[#F1F4F8] h-24">
                            <Th>Seat Categories</Th>
                            <Th>Week Days</Th>
                            <Th>Weekend</Th>
                            <Th>All Week Morning Shows/Tuesday/Wednesday</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Slider</Td>
                            <Td>400</Td>
                            <Td>200</Td>
                            <Td>400</Td>
                        </Tr>
                        <Tr>
                            <Td>Fix Lounger</Td>
                            <Td>200</Td>
                            <Td>500</Td>
                            <Td>100</Td>
                        </Tr>
                        <Tr>
                            <Td>Recliner</Td>
                            <Td>800</Td>
                            <Td>900</Td>
                            <Td>600</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default page;
