import React from 'react';
import css from './Statistics.module.css';
import { BsArrowUpShort } from "react-icons/bs";
import {groupNumber} from '../../data/data';
import StatisticalChart from '../../Components/StatisticalChart/StatisticalChart';

const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview of Statistics</span>


            <div className={`${css.cards} grey-container`}>
                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Top Item this month</span>
                        <span>Office comp</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Items</span><span>$ {groupNumber(25.087)}</span>
                </div>

                <div className={css.container}>
                    <span>
                        Profit
                    </span>
                    <span>
                        profit
                    </span>
                    <span>$ {groupNumber(3700)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>$ {groupNumber(57348)}</span>
                </div>
            </div>
            <StatisticalChart />
        </div>
    );
};

export default Statistics
