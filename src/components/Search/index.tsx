import React, { useState } from 'react'
import { InputGroup, Input, Icon, Table, Avatar } from 'rsuite';
import SearchService, { People, PeopleEntity } from '../../services/search-service';

function Search(props: any) {
    const styles = {
        group: {
            width: 300,
            marginBottom: 10
        }
    };
    const { Column, HeaderCell, Cell } = Table;
    const service: SearchService = new SearchService();
    let initArray: PeopleEntity[] = [];
    const [result, setResult] = useState(initArray);


    function searchBy(input: string) {
        const timeoutId = setTimeout(() => {
            const res: PeopleEntity[] = service.getItemsByInput(input)
            setResult(res)
        }, 2000)
        const num: number = Number(timeoutId);
        window.clearTimeout(Number(num - 1))

    }


    function autoHeightEnable() {
        if (result.length < 3) {
            return true;
        } else {
            return false;
        }
    }

    if (!result.length) {
        return (
            <>
                <InputGroup inside style={styles.group}>
                    <Input onChange={(e) => {
                        searchBy(e);
                    }} />
                    <InputGroup.Button>
                        <Icon icon="search" />
                    </InputGroup.Button>
                </InputGroup>
            </>
        )
    } else {
        return (
            <>
                <InputGroup inside style={styles.group}>
                    <Input onChange={(e) => {
                        searchBy(e)
                    }} />
                    <InputGroup.Button>
                        <Icon icon="search" />
                    </InputGroup.Button>
                </InputGroup>

                <Table
                    autoHeight={result.length < 10}
                    loading={!result.length}
                    virtualized
                    data={result}
                    onRowClick={data => {
                        console.log(data);
                    }}

                    height={700}
                    width={700}
                >

                    <Column align="left" width={200}>
                        <HeaderCell>Avatar</HeaderCell>
                        <Cell>
                            {(rowData: any) => {
                                return (

                                    <Avatar src={rowData.avatar} circle size="sm" />
                                );
                            }}
                        </Cell>
                    </Column>

                    <Column width={70} align="center" fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={130}>
                        <HeaderCell>Name</HeaderCell>
                        <Cell dataKey="name" />
                    </Column>

                    <Column width={130} align="right">
                        <HeaderCell>Created At</HeaderCell>
                        <Cell dataKey="createdAt" />
                    </Column>

                </Table>
            </>
        )
    }
}



export default Search;