<!--- Get the request data. --->
<cfset requestData = getHTTPRequestData() />


<!---
	Check to make sure this is a valid SOAP request - we
	need to make sure that the content is XML and that we have
	the SOAPTarget and SOAPAction.
--->
<cfif (
	isXml( requestData.content ) &&
	structKeyExists( requestData.headers, "SOAPTarget" ) &&
	structKeyExists( requestData.headers, "SOAPAction" )
	)>

	<!--- Pass the SOAP request onto the target. --->
	<cfhttp
		result="soapResponse"
		method="post"
		url="#requestData.headers.SOAPTarget#">

		<!--- Set SOAP action header. --->
		<cfhttpparam
			type="header"
			name="SOAPAction"
			value="#requestData.headers.SOAPAction#"
			/>

		<!--- Submit the XML post body. --->
		<cfhttpparam
			type="xml"
			value="#requestData.content#"
			/>

	</cfhttp>

	<!--- Conver the SOAP response to binary. --->
	<cfset binaryResponse = toBinary(
		toBase64( soapResponse.fileContent )
		) />

	<!--- Stream back to client. --->
	<cfcontent
		type="text/xml"
		variable="#binaryResponse#"
		/>

<cfelse>

	<!--- Create a malformed request error response. --->
	<cfheader
		statuscode="400"
		statustext="Bad Request"
		/>

	<!--- Create an error message. --->
	<cfsavecontent variable="responseText">
		Your SOAP request must:
		- Be XML Content
		- Have the SOAPTarget header
		- Have the SOAPAction header
	</cfsavecontent>

	<!--- Convert the response to binary. --->
	<cfset binaryResponse = toBinary(
		toBase64( responseText )
		) />

	<!--- Stream back to client. --->
	<cfcontent
		type="text/plain"
		variable="#binaryResponse#"
		/>

</cfif>