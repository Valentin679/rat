import * as React from 'react';

export default function TagsLabel({selectedTags}) {
    return (
        <div style={{
            display: 'flex',
            gap: '8px'
        }}>
            {selectedTags.map(tag=><div key={tag.slug} style={{
                backgroundColor: '#666',
                width: 'fit-content',
                padding: '5px 10px',
                color: 'white',
                borderRadius: '8px',
                fontSize: '11px'

            }}>{tag.title}</div>)}
        </div>
    );
}