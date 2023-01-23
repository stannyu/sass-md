import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { FunctionComponent, useEffect } from 'react';

import styles from './Test.module.scss';

type TestPageProps = {
  query: any;
};

const TestPage: FunctionComponent<TestPageProps> = ({ query }) => {
  // const { textClass, titleClass, extraColorClass } = styles;
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className="category-news">
      <Link href="/">Home</Link>
      <p className="textClass">
        here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, minus deserunt quos nostrum
        nesciunt rem ullam sed, perferendis tempore, omnis saepe voluptates facere? Blanditiis accusantium voluptas sint
        culpa expedita illo eveniet sit dolorum? Rem sapiente eligendi laboriosam veniam in neque cum accusantium
        deleniti praesentium molestiae porro, rerum doloremque incidunt nihil, tenetur saepe dolor pariatur optio
        corporis error labore impedit. Repellendus ex minus expedita officiis consequatur, est hic blanditiis eligendi
        quis eius at, asperiores illo. Rem ratione quidem, dolore a tenetur consectetur explicabo aperiam error ab
        officiis, ea reprehenderit ipsa labore accusamus voluptatum laborum repellendus rerum fuga maiores quas ex.
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TestPageProps> = async ({ query }) => {
  return {
    props: { query }, // will be passed to the page component as props
  };
};

export default TestPage;
