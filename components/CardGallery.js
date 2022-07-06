import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Row, Col} from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';


export const CardGallery = ({ items }) => {
  return (
    <div className={styles.cardGallery}>
      <Row gutter={[0, 16]}>
        {items.map((item, index) => <Card key={index} item={item} />)}
      </Row>
    </div>
  )
}

const Card = ({ item }) => {
  let { name, neighborhood, featured_image } = item;
  return (
    <Col xs={24} sm={6}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={featured_image || 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} className={styles.parkImage} alt={name} width={321} height={321} />
          <div className={styles.actions}>
            <div className={styles.circle}><ArrowRightOutlined /></div>
          </div>
        </div>

        <h2 className={styles.parkTitle}>{name}</h2>
        <p>{neighborhood}</p>
      </div>
    </Col>
  )
}

export default CardGallery;