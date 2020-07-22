import React from 'react';
import { Zoom } from 'react-reveal';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const SectionTitle = ({ title }) => {
    const firstLeter = title[0].toUpperCase();
    const restOfTitle = title.slice(1);

    const theme = useTheme();
    return (
        <Zoom>
            <Typography style={{ ...theme.share.sectionTitle }}>
                <span
                    style={{
                        marginRight: 4,

                        color: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.primary.main}`,
                        padding: '4px 8px 4px 12px',
                        textAlign: 'center',
                        boxShadow: theme.shadows[4],
                    }}
                >
                    {firstLeter}
                </span>
                {restOfTitle}
            </Typography>
        </Zoom>
    );
};

export default SectionTitle;
