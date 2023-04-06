import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MongoClient } from 'mongodb';
import Link from 'next/link'
import {notFound} from "next/navigation"
import styles from './page.module.css'
import {getDatasetCollection} from "../modules/db/connect";
import {addApiSuffix, removeApiSuffix} from "../tool/url";
import Container from "../components/container";
import userTwoImg from "../../../public/img/flags/eu.svg";
import TestimonialsBase from "../components/testimonialsBase";
import NavigationBar from "../components/navigationBar";
import {truncateText} from "../tool/string";
import Technology from "../components/technology";
import { mainLanguageText } from '../tool/translate';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })



export default async function Home(a: any) {


    return (
        <div>
      dsadsa

        </div>
    )
}

<style />
