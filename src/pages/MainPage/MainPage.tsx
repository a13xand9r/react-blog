import { classNames } from '../../helpers/classNames';

function MainPage() {
    return (
        <div className={classNames('mainClass', {falseClass: false, trueClass: true}, {otherTrue: 'true'})}>MainPage</div>
    )
}

export default MainPage;