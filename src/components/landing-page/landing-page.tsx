import React from 'react';
import { ContentChart } from './contents/chart';
import { ContentTable } from './contents/table';
import { CallToAction } from './contents/cta';
import { UserTable } from './user-table/user-table';

export const LandingPage = () => (
    <>
        <UserTable />
        <ContentTable />
        <ContentChart />
        <CallToAction />
    </>
);
