"use client"

import App from "next/app";
import Navbar from "./components/navbar";
import { AppShell, SimpleGrid } from '@mantine/core';
// import "./globals.css";

export default function Home() {
  return (
    <AppShell styles={{
      root: {
        fontFamily: 'Arial, sans-serif',
        color: '#0F1035',
        backgroundColor: '#0F1035',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
      },      
      main: {
        marginTop:'3%',
        color:'#0F1035',
        minHeight: '100vh',
        width: '80%',
        // backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      navbar: {
        width: '100%',
        height: '8vh',
        color:'#0F1035',
        backgroundColor: "#365486",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
    }}>
    <AppShell.Navbar><Navbar/></AppShell.Navbar>
      <AppShell.Main>
        <div id="top-field" style={{ display: 'flex', flexDirection: 'row', gap:'2.2%', width:'100%', height:'25vh', }}>
          <div id="tag-field" style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#7FC7D9", width: '70%', borderRadius:'25px'}}>
            <h1>tag</h1>
          </div>
          <div id="feature-field" style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#7FC7D9", width: '30%', borderRadius:'25px'}}>
            <h1>feature</h1>
          </div>
        </div>
        <div id="bot-field" style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#7FC7D9", width:'100%', minHeight:'100vh', borderRadius:'25px', marginTop: '2%'}}>
          <h1>toppic</h1>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}