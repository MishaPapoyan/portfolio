import avatar from '../img/img.png'
const Contacts = () => {
    return (
		<main className="section">
			<h1 className="title-1">Contacts</h1>
			<div className="container container__footer">
				<div>
					<img src={avatar} width='500px' height='500px' style={{borderRadius: '50%'}} alt=""/>
				</div>
				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Gyumri, Armenia</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							+374 93 03 09 83<br/>+374 77 39 84 94
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							papoyanmisha77@gmail.com
						</p>

					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;