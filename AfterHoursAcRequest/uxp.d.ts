interface IWidgetProps {
    uxpContext: IUXPContext;
}
interface IUXPContext {
    executeAction: (model: string, action: string, parameters: any) => Promise<any>;
    fireEvent: (eventID: string) => Promise<void>;
    hasAppRole: (roles: string | string[]) => Promise<boolean>;
    lucyUrl: string;
    apiKey: string;
    userKey: string;
}

declare module "uxp/components" {
    interface IUXPButtonProps {
        title: string;
        onClick: () => void;
    }
    export var Button: React.ComponentClass<IUXPButtonProps, {}>;

    // portal
    interface IPortalContainer { }
    export const PortalContainer: React.FC<IPortalContainer>;

    // tooltip
    type ITooltipPosition = "top" | "bottom" | "left" | "right";
    interface ITooltip {
        content: any,
        position?: ITooltipPosition
    }
    export const Tooltip: React.FC<ITooltip>;

    // popover
    interface IPopover { 
        title: string | HTMLElement,
        content: string | HTMLElement,
        position?: ITooltipPosition
    }
    export const Popover: React.FC<IPopover>;

    // modal
    interface IModal {
        show: boolean,
        title?: any,
        onOpen: any,
        onClose: any,
        backgroundDismiss?: boolean,
        closeButton?: any,
        styles?: any,
        class?: string,
        headerContent?: any
        showCloseButton?: boolean
    }
    export const Modal: React.FC<IModal>;

    interface ICallback {
        (): void
    }
    
    interface IFilterPanel {
        onOpen?: ICallback,
        onClose?: ICallback,
        onClear?: ICallback,
        fillContainer?: React.RefObject<HTMLElement>,
        class?: string
    }

    export const FilterPanel: React.FC<IFilterPanel>

}