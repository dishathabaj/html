<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/xsl/Transform">
   <xsl:template match="/">
      <html>
             <head>
               <title> employee list</title>
            </head>
            <body>
               <h2> employee list</h2>
               <table border="1">
                  <tr>
                     <th>Id</th>
                     <th>First name</th>
                     <th>Last name</th>
                     <th>Salary</th>
                  </tr>
                  <xsl:for-each select="class/employee">
                  <tr>
                     <td><xsl:value-of select="@id"/></td>
                     <td><xsl:value-of select="first name"/></td>
                     <td><xsl:value-of select="@last name"/></td>
                     <td><xsl:value-of select="salary"/></td>
                     <td>
                        <xsl:if test="salary &gt;  30000">
                           <b><xsl:value-of select="salary"/></b>
                        </xsl:if>

                        <xsl:if test="salary &gt;  40000">
                           <b><xsl:value-of select="salary"/></b>
                        </xsl:if>
                     </td>
                  </tr>
                  </xsl:for-each>
               </table>
            </body>
      </html>
   </xsl:template>
</xsl:stylesheet>