import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TimeLineItem from '../components/TimeLineItem';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Star } from '@material-ui/icons';
import { useTheme, Typography, Container, makeStyles } from '@material-ui/core';

import timelineData from '../../content/timeline.yaml';

const useStyles = makeStyles(theme => ({
  timelineCustom: {
    '&::before': {
      background: theme.palette.text.primary,
    },
  },
}));

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const CommunityPage = () => {
  const { palette, shadows } = useTheme();
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Community" />

      <Container>
        <Typography variant="h4" component="h2" style={{ margin: 30 }}>
          Community
        </Typography>

        <VerticalTimeline className={classes.timelineCustom}>
          {timelineData.map(data => (
            <TimeLineItem {...data} />
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: palette.primary[palette.type],
              color: '#fff',
              boxShadow: shadows[2],
            }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </Container>
    </Layout>
  );
};

export default CommunityPage;
