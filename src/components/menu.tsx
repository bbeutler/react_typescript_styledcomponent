import React, { useState } from 'react'
import styled from 'styled-components'

import { Colors } from '../lib/style-guide'
import { classNames } from '../lib/classnames'
import { MenuItemData } from "../lib/common-types";
import { Logo } from './shared/logo'

export type MenuType = "mnu_owner" | "mnu_status";

export type AvatarProps = {
    avatar?: string
}
export type MenuItemProps = {
    itemData: MenuItemData
    selected: boolean
    menuType: MenuType
    onClick: () => void
}
export interface MenuProps {
    menuType: MenuType
    isFilter?: boolean
    items: MenuItemData[]
    onChange?: (item: MenuItemData) => void
}
export interface MenuHeaderProps {
    isFilter?: boolean
    filter: string
    onFilter: (newFilter: string) => void
}
export interface MenuBodyProps {
    selectedItem?: MenuItemData
    menuType: MenuType
    items: MenuItemData[]
    onSelect: (item: MenuItemData) => void
}

const Avatar: FC<AvatarProps> = ({className}) => (
    <div className={className}>
        <Logo />
        <div className="avatar" />
    </div>
)

const MenuItem: FC<MenuItemProps> = ({itemData, selected, menuType, onClick, className}) => (
    <div className={selected ? classNames(className, "selected") : className} onClick={onClick}>
        { menuType === "mnu_owner" &&  <StyledAvatar avatar={itemData.avatar}/>}
        <div className="name">{itemData.name}</div>
        { menuType === "mnu_owner" && <div className="role">{itemData.role}</div> }
    </div>
)

const MenuHeader: FC<MenuHeaderProps> = ({isFilter, filter, onFilter, className}) => (
    <div> {
        isFilter && <>
        <div className={className}>
            <input type="text" placeholder="Filter by name" onChange={(e) => onFilter(e.target.value)} value={filter} />
            { filter !== "" && <div className="clear" onClick={()=>onFilter("")}><span>x</span></div> }
        </div>
        <div className="divider" /> </>
    } </div>
)

const MenuBody: FC<MenuBodyProps> = ({selectedItem, menuType, items, onSelect, className}) =>  (
    <div className={className}>
        { items.map((item: MenuItemData, index: number) => 
            <StyledMenuItem 
                key={index} 
                itemData={item} 
                selected={selectedItem===item}
                menuType={menuType}
                onClick={() => onSelect(item)}
            /> 
        )}
    </div>
)

const Menu: FC<MenuProps> = ({menuType, isFilter, items, onChange, className}) => {
    const [selectedItem, setSelectedItem] = useState<MenuItemData | undefined>(undefined);
    const [filteredItems, setFilteredItems] = useState<MenuItemData[]>(items);
    const [filter, setFilter] = useState<string>("");

    const onSelect = (item: MenuItemData) => {
        setSelectedItem(item); onChange && onChange(item)
    };
    const onFilter = (newFilter: string) => {
        setFilter(newFilter);
        setFilteredItems(newFilter==="" ? items : items.filter(item => item.name.toUpperCase().indexOf(newFilter.toUpperCase())>-1))
    }
    return (
        <div className={className}>
            <StyledMenuHeader isFilter={isFilter} filter={filter} onFilter={onFilter} />
            <StyledMenuBody selectedItem={selectedItem} menuType={menuType} items={filteredItems} onSelect={onSelect} />
        </div>
    )
}

const StyledMenu = styled(Menu)`
    align-self: center;
    margin: 0 auto;

    height: 100%;
    background: ${Colors.PureWhite};
    border: 1px solid ${Colors.Border};
    box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06), 0px 4px 16px rgba(50, 132, 225, 0.16);
    border-radius: 4px;

    .divider {
        background: ${Colors.BG4};
        height: 1px;
    }
`;

const StyledAvatar = styled(Avatar)`
    display: flex;
    align-items: center;
    position: relative;

    .avatar {
        border-radius: 100px;
        background-size: cover;
        background-color: red;
        resize: both;
        width: 22px;
        height: 22px;
        background-image: url(${props => props.avatar !== undefined ? props.avatar : "../icons/logo.svg"});
        position: relative;
        right: 10px;
    }
`;

const StyledMenuHeader = styled(MenuHeader)`
    padding: 16px 21px;
    position: relative;

    input {
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        padding-right: 10px;
        color: ${Colors.INPUT};

        &:focus {
            outline: none;
        }
        &::placeholder {
            font-family: 'Inter UI';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: ${Colors.INPUT};
        }
    }
    .clear {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: ${Colors.INPUT};
        &:hover {
        opacity: 80%;
        }
        &:active {
            opacity: 0%;
        }
    }
`

const StyledMenuBody = styled(MenuBody)`
    padding: 10px 0px 10px;
`

const StyledMenuItem = styled(MenuItem)`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0px 21px;
    cursor: pointer;

    .name {
        margin-right: 11px;
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #192533;
    }
    .role {
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #60789A;
    }

    &:hover {
        background: ${Colors.BG3};
    }

    &.selected {
        background: #1E75D8;
        .name {
            color: ${Colors.PureWhite} !important;
        }
        .role {
            color: #D1E3F8 !important;
        }
        .logo {
            border-color: white;
        }
        animation: fadein 2s;
        -moz-animation: fadein 2s; /* Firefox */
        -webkit-animation: fadein 2s; /* Safari and Chrome */
        -o-animation: fadein 2s; /* Opera */
    }
    @keyframes fadein {
        from { opacity:0; }
        to { opacity:1; }
    }
    @-moz-keyframes fadein { /* Firefox */
        from { opacity:0; }
        to { opacity:1; }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from { opacity:0; }
        to { opacity:1; }
    }
    @-o-keyframes fadein { /* Opera */
        from { opacity:0; }
        to { opacity: 1; }
    }
`;

export { StyledMenu as Menu }
