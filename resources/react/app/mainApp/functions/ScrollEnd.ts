function ScrollEndMessageBox(messagesEndRef: any)
{
	messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
}

export {
	ScrollEndMessageBox
}
