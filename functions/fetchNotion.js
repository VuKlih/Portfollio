const { Client } = require('@notionhq/client');

const { NOTION_KEY, NOTION_DB } = process.env;

const notion = new Client({
    auth: process.env.NOTION_KEY,
});

exports.handler = async function (event, context) {
    const response = await notion.databases.query({
        database_id: NOTION_DB,
    });
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
};
