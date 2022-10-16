function Status(props) {

    function getBadgeCSS() {
        switch (props.type) {
            default:
                return 'bg-secondary';
            case 'active':
                return 'bg-success';
            case 'expired':
                return 'bg-warning';
            case 'banned':
                return 'bg-danger';
          
        }
    }

    return (
        <span className={`badge ${getBadgeCSS()}`}>
            {props.type}
        </span>
    );
}

export default Status;